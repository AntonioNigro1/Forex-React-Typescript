import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { api } from "../../core/services/api";

const CFPassword = chakra(FaLock);

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async () => {
    const requestOptions = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: "Antonio",
        email: "toninisdfasdasdaso@live.com",
        password: "010398",
      }),
    };

    try {
      const data = await api.post("/register", requestOptions);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">Register</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaUserAlt color="black" />
                  </InputLeftElement>
                  <Input
                    type="name"
                    placeholder="Full name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <AiFillMail color="black" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="Email address"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <CFPassword color="black" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account?
        <Link color="teal.500" href="/Login">
          {" "}
          Sign In
        </Link>
      </Box>
    </Flex>
  );
};

export default Register;
