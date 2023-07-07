import { ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebase'
import { TextInput, Alert } from 'react-native'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true)

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            alert('check emails')
        } catch (error) {
            console.log(error)
            alert('Sign failed:' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
            <TextInput
                value={email}
                style={styles.input}
                placeholder='Email'
                autoCapitalize='none'
                onChangeText={(text) => setEmail(text)}
            >
            </TextInput>
            <TextInput
                secureTextEntry={true}
                value={password}
                style={styles.input}
                placeholder='password'
                onChangeText={(text) => setPassword(text)}
            >
            </TextInput>
            {
                loading ? <ActivityIndicator size='large' />
                    : <>
                        <Button title='Create account' onPress={signUp}/>
                    </>
            }
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10
    }
})