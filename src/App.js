import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

function App() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(6, "Username is too short"),
        password: Yup.string()
          .required("Password required")
          .min(6, "Password is too short"),
        email: Yup.string().email("invalid email").required("email required"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {formik => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: "90%", md: 500 }}
          h="100vh"
          justifyContent="center"
          onSubmit={formik.handleSubmit}
        >
          <Heading>Sign Up</Heading>

          <TextField name="username" placeholder="enter username" />
          <TextField name="email" placeholder="enter email" type="email" />

          <TextField
            name="password"
            type="password"
            placeholder="enter password"
          />

          <Button type="submit" variant="outline" colorScheme="teal">
            Create Acc
          </Button>
        </VStack>
      )}
    </Formik>
  );
}

export default App;
