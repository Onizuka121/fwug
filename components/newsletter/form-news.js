import Form from "./form";

export default function FormNewsLetter() {
  return (
    <div className="max-w-screen-lg shadow-xl backdrop-blur-3xl rounded-3xl border border-[#F8E197] px-3 xl:m-0 mx-auto py-10">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-sm rounded-2xl"
            src="images/image20.jpg"
            alt="fwug image newsletters"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className="text-4xl font-bold text-[#F8E197] chakra-petch-bold">
              Subscribe
            </h3>
            <p className="mt-2 max-w-[20rem] text-lg text-[#65B1E0] chakra-petch-medium">
              Join our weekly digest. You'll also receive some of our best posts
              today.
            </p>
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}


