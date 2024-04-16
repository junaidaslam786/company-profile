import React from "react";

const ContactUsInfo = ({ icon, title, email, phone }) => {
  return (
    <div className="mb-12 w-full shrink-0 grow-0 md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
      <div className="flex flex-row items-center">
        <div className="shrink-0 rounded-md bg-slate-300 p-4 text-blueColor-0">{icon}</div>
        <div className="ml-6 grow">
          <p className="mb-2 text-[1.2vw] font-bold text-blueColor-0">{title}</p>
          <p className="text-neutral-500 dark:text-neutral-200 text-[1.1vw]">{email}</p>
          <p className="text-neutral-500 dark:text-neutral-200 text-[1vw]">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
