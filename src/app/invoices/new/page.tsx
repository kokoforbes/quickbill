export default function NewInvoice() {
  return (
    <main className='flex flex-col justify-center gap-6 h-full max-w-5xl mx-auto my-16'>
      <div className='flex flex-col gap-2'>
        <h4 className='text-2xl font-bold'>Invoices</h4>
        <h1 className='text-3xl font-bold'>Create a new Invoice</h1>
      </div>

      <form>
        <div>
          <label className='block'>
            Customer Name
            <input
              type='text'
              className='mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-blue-500'
              placeholder='John Doe'
            />
          </label>
        </div>

        <div>
          <label>Description</label>
          <textarea className=''></textarea>
        </div>
      </form>
    </main>
  );
}
