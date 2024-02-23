import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import {useNavigate} from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { signUpUser } from "@/appwrite/appwrite"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6, {message: "Password must be at least 6 characters"}),
})


const SignUp = () => {
  const navigate = useNavigate();
  const {toast} = useToast();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })
   
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
     await signUpUser(values.email, values.password, values.username);
      toast({
        title: "Account create, please login to continue",
        variant: "default"
      })

      navigate('/login');
    }
  return (
    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Harry" {...field} className="text-black"/>
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="harrypotter@gmail.com" {...field} className="text-black"/>
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="******" {...field} type="password" className="text-black"/>
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
      <h2 className="mt-4">Already a user? <Link to="/login" className="text-blue-200">Log in</Link></h2>

    </form>
  </Form>
  )
}

export default SignUp