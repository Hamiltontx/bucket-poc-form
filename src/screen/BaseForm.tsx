import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import CreditCardForm, {Button, FormModel} from 'rn-credit-card';

type Props = {
  anim: boolean;
};

const BaseForm = ({anim}: Props) => {
  const formMethods = useForm<FormModel>({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });

  const {handleSubmit, formState} = formMethods;

  const onSubmit = (model: FormModel) => {
    Alert.alert('Success: ' + JSON.stringify(model, null, 2));
  };

  return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <CreditCardForm
            LottieView={anim ? LottieView : null}
            formOnly={!anim}
            horizontalStart={false}
            overrides={{
              labelText: {
                marginTop: 16,
              },
            }}
            fonts={{
              regular: 'Arial',
              bold: 'Arial',
            }}
            inputColors={{
              focused: '#49ad4d',
              errored: '#B00020',
              regular: '#B9C4CA',
            }}
          />
        </KeyboardAvoidingView>
        {formState.isValid && (
          <Button
            style={styles.button}
            title={'CONFIRM PAYMENT'}
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </SafeAreaView>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  avoider: {
    flex: 1,
    padding: 36,
  },
  button: {
    margin: 36,
    marginTop: 0,
    backgroundColor: '#49ad4d',
  },
});

export default BaseForm;
