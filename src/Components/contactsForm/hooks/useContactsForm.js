import React, { useState } from "react";

const useContactsForm = () => {
  const INITIAL_VALUE = {
    name: "",
    phoneNumber: "",
    phones: [],
    email: "",
    emails: [],
    company: "",
    contacts: [],
  };
  const [contactsInformations, setContactsInformations] =
    useState(INITIAL_VALUE);

  const updateContactsInformations = ({ key, value }) => {
    setContactsInformations({ ...contactsInformations, [key]: value });
  };

  const handleNameChange = (value) => {
    updateContactsInformations({ key: "name", value: value });
  };

  const handlePhoneNumberChange = (value) => {
    updateContactsInformations({ key: "phoneNumber", value: value });
  };

  const handleEmailChange = (value) => {
    updateContactsInformations({ key: "email", value: value });
  };

  const handleCompanyChange = (value) => {
    updateContactsInformations({ key: "company", value: value });
  };

  const handleInsertPhoneNumberClick = () => {
    const { phones, phoneNumber } = contactsInformations;
    phones.push({ number: phoneNumber });
    updateContactsInformations({ key: "phones", value: phones });
    handlePhoneNumberChange("");
  };

  const handleDeletePhoneNumberClick = (index) => {
    const { phones } = contactsInformations;
    phones.splice(index, 1);
    updateContactsInformations({ key: "phones", value: phones });
  };

  const handleInsertEmailClick = () => {
    const { emails, email } = contactsInformations;
    emails.push({ email });
    updateContactsInformations({ key: "emails", value: emails });
    handleEmailChange("");
  };

  const handleDeleteEmailClick = (index) => {
    const { emails } = contactsInformations;
    emails.splice(index, 1);
    updateContactsInformations({ key: "emails", value: emails });
  };

  const handleContactClick = () => {
    const { name, phones, emails, company, contacts } = contactsInformations;
    contacts.push({ name, phones, emails, company });
    updateContactsInformations({ key: "contacts", value: contacts });
  };

  const handleEditPhoneNumberClick = (index) => {
    const { phones, phoneNumber } = contactsInformations;
    phones[index].number = phoneNumber;
    updateContactsInformations({ key: "phones", value: phones });
  };

  return {
    models: { form: contactsInformations },
    operations: {
      handleNameChange,
      handlePhoneNumberChange,
      handleEmailChange,
      handleCompanyChange,
      handleInsertPhoneNumberClick,
      handleInsertEmailClick,
      handleDeletePhoneNumberClick,
      handleDeleteEmailClick,
      handleContactClick,
      handleEditPhoneNumberClick,
    },
  };
};

export { useContactsForm };
