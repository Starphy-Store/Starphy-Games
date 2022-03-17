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
  Text,
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
            <Container textAlign="right" p="6">
              <a href="/CategorySection/Acción">
                <Text fontSize="2xl">Acción 🛸</Text>
              </a>
              <a href="/CategorySection/Cooperativo">
                <h4>Cooperativo 🐱‍🐉</h4>
              </a>
              <a href={`/CategorySection/Online`}>
                <h4>Online 🤼‍♂️</h4>
              </a>
              <a href="/CategorySection/Arcade">
                <h4>Arcade 🎮</h4>
              </a>
              <a href="/CategorySection/Estrategia">
                <h4>Estrategia 🌌</h4>
              </a>
              <a href="/CategorySection/BattleRoyale">
                <h4>Battle Royale 🪓</h4>
              </a>
              <a href="/CategorySection/Puzzle">
                <h4>Puzzle 🧩</h4>
              </a>
              <a href="/CategorySection/AgilidadMental">
                <h4>Agilidad Mental 🧠</h4>
              </a>
              <a href="/CategorySection/Carreras">
                <h4>Carreras 🚦</h4>
              </a>
              <a href="/CategorySection/Lucha">
                <h4>Lucha 👊</h4>
              </a>

              <a href="/CategorySection/Shooter">
                <h4>Shooter 🎯</h4>
              </a>
              <a href="/CategorySection/Sigilo">
                <h4>Sigilo 🐱‍👤</h4>
              </a>
              <a href="/CategorySection/Terror">
                <h4>Terror 👻</h4>
              </a>
              <a href="/CategorySection/MOBA">
                <h4>MOBA 💻</h4>
              </a>
              <a href="/CategorySection/MundoAbierto">
                <h4>Mundo Abierto 🌏</h4>
              </a>
              <a href="/CategorySection/RPG">
                <h4>RPG 🤪</h4>
              </a>
              <a href="/CategorySection/FPS">
                <h4>FPS 🌄</h4>
              </a>
              <a href="/CategorySection/Minijuegos">
                <h4>Minijuegos 🎱</h4>
              </a>
              <a href="/CategorySection/MMORPG">
                <h4>MMORPG 👩‍💻</h4>
              </a>
              <a href="/CategorySection/Simulacion">
                <h4>Simulacion 🛸</h4>
              </a>
              <a href="/CategorySection/Supervivencia">
                <h4>Supervivencia 🏃‍♀️</h4>
              </a>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HeaderCategorias;
