"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import Whatsapp from "../components/WhatsAppico";

const ContactForm = () => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "name Too Short")
      .max(50, "name Too Long")
      .required("name Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("email Required"),
    message: Yup.string()
      .min(10, "message Too Short")
      .required("message Required"),
  });

  return (
    <div className="relative max-w-lg mx-auto mt-20 mb-24">

      {/* Emerald Glow Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                      from-emerald-500/40 via-emerald-400/10 to-transparent 
                      blur-xl opacity-40"></div>

      {/* Main Card */}
      <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl 
                      border border-white/10 rounded-2xl 
                      shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)]">

        <h2 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
          contact me through :
        </h2>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form data:", values);
            toast.success("contact submitted successfully");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">

              {/* FIELD COMPONENT WITH EMERALD FOCUS ANIMATION */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="ex. mohamed salah"
                  className="w-full p-3 rounded-lg bg-gray-900/90 text-white 
                             border border-gray-700 
                             focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 
                             transition-all duration-300"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="ex. 123@example.com"
                  className="w-full p-3 rounded-lg bg-gray-900/90 text-white 
                             border border-gray-700 
                             focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 
                             transition-all duration-300"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="your message here"
                  className="w-full p-3 rounded-lg bg-gray-900/90 text-white 
                             border border-gray-700 
                             focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 
                             transition-all duration-300"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-emerald-500 hover:bg-emerald-600 
                           text-white font-semibold py-3 rounded-lg 
                           transition-all duration-300 
                           shadow-[0_0_15px_rgba(16,185,129,0.5)]
                           hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] 
                           disabled:opacity-50"
              >
                {isSubmitting ? "submitting..." : "submit"}
              </button>
            </Form>
          )}
        </Formik>

        {/* WHATSAPP BUTTON */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <h1>or</h1>
          <h1>contact with</h1>

          <button
            className="mt-3 px-4 py-2 border border-emerald-400 
                       text-emerald-400 rounded-2xl
                       hover:bg-emerald-500 hover:text-white 
                       transition-all duration-300
                       shadow-[0_0_15px_rgba(16,185,129,0.3)]
                       hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
          >
            <Whatsapp size="20" text={"Whatsapp"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
