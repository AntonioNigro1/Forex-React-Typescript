import { useEffect, useState } from "react";
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
  useToast,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { baseURL } from "../../core/services/api";
import { useAuth } from "../../contexts/Auth/Auth";
import { useRouter } from "next/router";

const CFaUserAlt = chakra(FaUserAlt);
const CFPassword = chakra(FaLock);
interface JSONResponse {
  token: string;
  _id: string;
  name: string;
}
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();
  const authContext = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authContext.auth) router.push({ pathname: "/Home" });
  }, [authContext]);

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleSubmit = async () => {
    try {
      const res = await fetch(`${baseURL}/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res.ok) {
        const data: JSONResponse = await res.json();

        authContext.signIn(data);

        router.push({ pathname: "/Home" });

        toast({
          title: "Login successefuly!",
          description: "Redirecting...",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw Error;
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
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
        <Heading color="#00a1ff">Welcome</Heading>
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
                    type="email"
                    placeholder="email address"
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
                style={{ backgroundColor: "#00a1ff", color: "white" }}
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
        New to us?
        <Link color="#00a1ff" href="/Register">
          {" "}
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
