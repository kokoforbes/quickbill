"use client";

import { SyntheticEvent, useState, startTransition } from "react";

import Form from "next/form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/SubmitButton";

import { createAction } from "@/app/actions";

export default function NewInvoice() {
  const [state, setState] = useState("ready");

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (state === "pending") return;
    setState("pending");
    const target = event.target as HTMLFormElement;

    startTransition(async () => {
      const formData = new FormData(target);

      await createAction(formData);
    });
  };

  return (
    <main className='flex flex-col justify-center gap-6 h-full max-w-5xl mx-auto my-16'>
      <div className='flex flex-col gap-2'>
        <h4 className='text-xl font-bold'>Invoices</h4>
        <h1 className='text-3xl font-bold'>Create a new Invoice</h1>
      </div>

      <Form
        action={createAction}
        onSubmit={handleOnSubmit}
        className='grid gap-4 max-w-xs'
      >
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

        <SubmitButton />
      </Form>
    </main>
  );
}
