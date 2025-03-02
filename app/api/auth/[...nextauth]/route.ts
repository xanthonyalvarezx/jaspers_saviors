import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/prisma/client";
import bcrypt from 'bcrypt';
//instantiate prisma uth options function
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", required: true, placeholder: "Email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) return null;
                const user = await prisma.user.findUnique({ where: { email: credentials.email } });
                if (!user) return null;
                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);
                return passwordsMatch ? user : null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    // Explicitly allow credentials and disable CSRF for custom API requests
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub!;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET, // Required for security
    debug: process.env.NODE_ENV === "development", // Helps debug issues
};

// Export handler for API routes
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
