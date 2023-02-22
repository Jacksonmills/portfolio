import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrimaryButton from './PrimaryButton';

export const handleCopyToClipboard = (payload: string, message: string) => {
  navigator.clipboard.writeText(payload);
  toast(message);
};

function CopyToClipboardButton({ content, successMessage = `${content} copied to clipboard`, children }: { content: string, successMessage?: string; children: any; }) {
  return (
    <>
      <PrimaryButton onClick={() => handleCopyToClipboard(content, successMessage)}>{children}</PrimaryButton>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default CopyToClipboardButton;