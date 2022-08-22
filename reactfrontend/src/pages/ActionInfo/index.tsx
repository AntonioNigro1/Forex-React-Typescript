import { useRouter } from "next/router";
import {
  Header,
  ProductContainer,
} from "../../pageComplements/historyScreen/components";
import { Container } from "../../pageComplements/historyScreen/styles";

const ActionInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      <Header />
      {typeof id == "string" ? <ProductContainer id={parseInt(id)} /> : <></>}
    </Container>
  );
};

export default ActionInfo;
