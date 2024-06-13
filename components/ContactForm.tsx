import React from "react";
import Link from "next/link";


const ContactForm = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white">Contato</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Seu nome"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Mensagem"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <Link
      href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzDDBvPbgxSXtBWvrzrWClfKKdHZfWRGzrSJpKnCvvvtXGfjDFtPkwBQHWsbGtLGsljXBrP"
      className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-purple-800 hover:bg-purple-600">
        Enviar contato
      </Link>
      
      
    </form>
  );
};

export default ContactForm;
