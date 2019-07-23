import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@atlaskit/textfield'
import Button, { ButtonGroup } from '@atlaskit/button'
import { Checkbox } from '@atlaskit/checkbox'
import Form, {
    CheckboxField,
    Field,
    FormFooter,
    HelperMessage,
    ErrorMessage,
    ValidMessage,
} from '@atlaskit/form'

import styles from './styles'

export default () => (
    <div className={styles.container}>
        <Form
            onSubmit={data => {
                console.log('form data', data)
                return new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
                    data.username === 'error' ? { username: 'IN_USE' } : undefined,
                )
            }}
        >
            {({ formProps, submitting }) => (
                <form {...formProps} className={styles.form}>
                    <h1>ورود به تالار</h1>
                    <Field name='username' label='نام کاربری' isRequired defaultValue=''>
                        {({ fieldProps, error }) => (
                            <Fragment>
                                <TextField autoComplete='off' {...fieldProps} />
                                {!error && (
                                    <HelperMessage>
                                        شما میتوانید از حروف و اعداد استفاده کنید
                                    </HelperMessage>
                                )}
                            </Fragment>
                        )}
                    </Field>
                    <Field
                        name='password'
                        label='رمز عبور'
                        defaultValue=''
                        isRequired
                        validate={value => (value.length < 8 ? 'TOO_SHORT' : undefined)}
                    >
                        {({ fieldProps, error, valid }) => (
                            <Fragment>
                                <TextField type='password' {...fieldProps} />
                                {!error && !valid && (
                                    <HelperMessage>
                                       بیشتر از هشت کاراکتر باشد و از حرف و عدد و نشانه استفاده کنید
                                    </HelperMessage>
                                )}
                                {error && (
                                    <ErrorMessage>
                                        Password needs to be more than 8 characters.
                                    </ErrorMessage>
                                )}
                                {valid && <ValidMessage>Awesome password!</ValidMessage>}
                            </Fragment>
                        )}
                    </Field>
                    
                    <FormFooter>
                        <Button className={styles.button} type='submit' appearance='primary' isLoading={submitting}>
                            ورود
                        </Button>
                        <Link className={styles.link} to='/register'>
                            <Button className={styles.button} appearance='link' isLoading={submitting}>
                                ثبت نام
                            </Button>
                        </Link>
                    </FormFooter>
                </form>
            )}
        </Form>
    </div>
)