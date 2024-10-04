import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function NewInvoice() {
  return (
    <main className='flex flex-col justify-center gap-6 h-full max-w-5xl mx-auto my-16'>
      <div className='flex flex-col gap-2'>
        <h4 className='text-xl font-bold'>Invoices</h4>
        <h1 className='text-3xl font-bold'>Create a new Invoice</h1>
      </div>

      <form className='grid gap-4 max-w-xs'>
        <div>
          <Label htmlFor='name' className='block font-semibold text-small'>
            Customer Name
            <Input
              id='name'
              name='name'
              type='text'
              className='mt-2'
              placeholder='John Doe'
            />
          </Label>
        </div>

        <div>
          <Label htmlFor='email' className='block font-semibold text-small'>
            Billing Email
            <Input id='email' name='email' type='email' className='mt-2' />
          </Label>
        </div>

        <div>
          <Label htmlFor='value' className='block font-semibold text-small'>
            Value
            <Input id='value' name='value' type='text' className='mt-2' />
          </Label>
        </div>

        <div>
          <Label
            htmlFor='description'
            className='block font-semibold text-small'
          >
            Description
          </Label>
          <Textarea
            id='description'
            name='description'
            className='mt-2'
          ></Textarea>
        </div>

        <Button type='submit' className='font-semibold'>
          Submit
        </Button>
      </form>
    </main>
  );
}
