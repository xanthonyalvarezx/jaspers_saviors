import React from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from "@react-email/components"
export default function WelcomeTemplate({ name }: { name: string }) {
    return (
        <Html>
            <Preview>Welcome to Jasper&#39;s Saviors</Preview>
            <Tailwind>
                <Body className='bg-black flex justify-center items-center h-96'>
                    <Container className='bg-white rounded-lg p-5 ' >
                        <Text className='font-3xl text-2xl text-center'>
                            Thank you {name} for signing up for an account with Jasper&#39;s Saviors.
                            <br />
                            <br />
                            With your help we can ease the burden of vetrinary bills for families everywhere! and let the love flow for many more years.
                            <br />
                            <Link className="font-bold" href="https://gofund.me/4f9f0e4d">Donate Here</Link>
                            <br />OR <br />
                            <Link className="font-bold" href="http://localhost:3000/auth/login"> Go to Jasper&#39;s Saviors</Link>
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}


