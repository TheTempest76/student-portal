'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useUser } from "@clerk/nextjs";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  usn: z.string().regex(/^[A-Za-z0-9]{10}$/, {
    message: "USN must be exactly 10 characters long and can only contain letters and numbers.",
  }),
  semester: z.string().min(1, {
    message: "Please select a semester.",
  }),
  branch: z.string().min(1, {
    message: "Please select a branch.",
  }),
  academicAccomplishments: z.string().optional(),
  sportsAccomplishments: z.string().optional(),
})

export  function StudentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      usn: "",
      semester: "",
      branch: "",
      academicAccomplishments: "",
      sportsAccomplishments: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="usn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>USN</FormLabel>
              <FormControl>
                <Input placeholder="1DA23CS001" {...field} />
              </FormControl>
              <FormDescription>
                University Seat Number (e.g., 1AB20CS001)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="semester"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Semester</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a semester" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <SelectItem key={sem} value={sem.toString()}>
                      {sem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="branch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Branch</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a branch" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CS">Computer Science</SelectItem>
                  <SelectItem value="IS">Information Science</SelectItem>
                  <SelectItem value="EC">Electronics & Communication</SelectItem>
                  <SelectItem value="ME">Mechanical Engineering</SelectItem>
                  <SelectItem value="CV">Civil Engineering</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="academicAccomplishments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Academic Accomplishments (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List your academic achievements..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sportsAccomplishments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sports Accomplishments (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List your sports achievements..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
export default function StudentDetails() { 
  const { user } = useUser() as { user: { firstName: string } };
  return(
   <div className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Enter Your Details {user?.firstName || "student"}
      </h1>
      <StudentForm />
      </div>
    </div>
  )
}