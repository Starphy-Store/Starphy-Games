import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function HeaderCategorias() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Categorias 🚀
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"xs"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{ textAlign: "center" }} fontSize="3xl">
            Categorias 🚀
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Que categoria estas buscando..." />

            <Container textAlign="right" p="6">
              <Link to="/Accion">
                <h4>Accion</h4>
              </Link>
              <Link to="/Cooperativo">
                <h4>Cooperativo</h4>
              </Link>
              <Link to="/Online">
                <h4>Online</h4>
              </Link>
              <Link to="/Arcade">
                <h4>Arcade</h4>
              </Link>
              <Link to="/Estrategia">
                <h4>Estrategia</h4>
              </Link>
              <Link to="/BattleRoyale">
                <h4>Battle Royale</h4>
              </Link>
              <Link to="/Puzzle">
                <h4>Puzzle</h4>
              </Link>
              <Link to="/AgilidadMental">
                <h4>Agilidad Mental</h4>
              </Link>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HeaderCategorias;
