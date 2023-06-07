import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
// import { text } from "stream/consumers";

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show)

  return (
    // <div>km</div>
    <VStack spacing="5px" >
      <FormControl isRequired id="name">
        <FormLabel>First name</FormLabel>
        <Input
        type="text"
        value={name}
          placeholder="First name"
          onChange = {(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired id="email">
        <FormLabel>email id</FormLabel>
        <Input
         type="text"
         value={email}
          placeholder="email id"
          onChange = {(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup>
          <Input
           value={password}
          type= {show ? "text" : "password" }
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem' >
            <Button h='1.75rem' size='sm'
            value={show}
            onClick = {handleClick}
            >{show ?  "hide" : "show" }</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>confirm password</FormLabel>
        <InputGroup>
          <Input
           value={confirmpassword}
          type= {show ? "text" : "password" }
            placeholder="confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width='4.5rem' >
            <Button h='1.75rem' size='sm'
            value={show}
            onClick = {handleClick}
            >{show ?  "hide" : "show" }</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>
          Upload Your Picture
        </FormLabel>
        <Input
        type="file"
        accept="image/*"
        p={1}
        />
      </FormControl>

    <Button
    width="100%"
    style={{marginTop : 15}}
    bg="light-blue">
      sign up
    </Button>
    </VStack>
  );
};

export default Signup;
