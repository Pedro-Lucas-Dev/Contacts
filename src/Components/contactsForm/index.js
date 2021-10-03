import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useContactsForm } from "./hooks/useContactsForm";

export const ContactsForm = () => {
  const { models, operations } = useContactsForm();
  return (
    <Box p={2}>
      <TextField
        label={"Nome"}
        value={models.form.name}
        onChange={(e) => operations.handleNameChange(e.target.value)}
      />
      <TextField
        label={"Telefone"}
        value={models.form.phoneNumber}
        onChange={(e) => operations.handlePhoneNumberChange(e.target.value)}
      />
      <Button
        variant={"contained"}
        onClick={operations.handleInsertPhoneNumberClick}
      >
        inserir
      </Button>
      {models.form.phones.map(({ number }, index) => {
        return (
          <Box key={index}>
            <Typography>{number}</Typography>
            <Typography
              onClick={() => operations.handleEditPhoneNumberClick(index)}
            >
              Editar
            </Typography>
            <Typography
              onClick={() => operations.handleDeletePhoneNumberClick(index)}
            >
              Deletar
            </Typography>
          </Box>
        );
      })}
      <TextField
        label={"Email"}
        value={models.form.email}
        onChange={(e) => operations.handleEmailChange(e.target.value)}
      />
      <Button variant={"contained"} onClick={operations.handleInsertEmailClick}>
        inserir
      </Button>
      {models.form.emails.map(({ email }, index) => {
        return (
          <Box key={index}>
            <Typography>{email}</Typography>
            <Typography
              onClick={() => operations.handleDeleteEmailClick(index)}
            >
              Deletar
            </Typography>
          </Box>
        );
      })}
      <TextField
        label={"Empresa"}
        value={models.form.company}
        onChange={(e) => operations.handleCompanyChange(e.target.value)}
      />
      <Button variant={"contained"} onClick={operations.handleContactClick}>
        Cadastrar
      </Button>
      {models.form.contacts.map((contact) => {
        return (
          <>
            <Typography>{contact.name}</Typography>
            {contact.phones.map(({ number }) => {
              return <Typography>{number}</Typography>;
            })}
            {contact.emails.map(({ email }) => {
              return <Typography>{email}</Typography>;
            })}
            <Typography>{contact.company}</Typography>
          </>
        );
      })}
    </Box>
  );
};
