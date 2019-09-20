import React from 'react'
import './sign-in.styles.scss'
import FormInput from './../form-input/form-input.component'
import CustomButton from './../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.util'
class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            //he removed
            console.log(error)
        }

    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' required value={this.state.email}
                        handleChange={this.handleChange} label='email' />

                    <FormInput name='password' type='password' required value={this.state.password}
                        handleChange={this.handleChange} label='password' />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                     </CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignIn