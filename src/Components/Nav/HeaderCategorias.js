import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Input,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import React from "react";

function HeaderCategorias() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Icon as={HamburgerIcon} w={6} h={6} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"xs"}
        finalFocusRef={btnRef}
        style={{ paddingTop: "30px" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            style={{ textAlign: "center", marginTop: "25px" }}
            fontSize="3xl"
          >
            Categorías
          </DrawerHeader>

          <DrawerBody>
            <Container textAlign="center" p="10">
              <a href="/CategorySection/Acción">
                <Text fontSize="xl">🛸 Acción </Text>
              </a>
              <a href="/CategorySection/Cooperativo">
                <Text fontSize="xl">🐱‍🐉 Cooperativo </Text>
              </a>
              <a href={`/CategorySection/Online`}>
                <Text fontSize="xl"> Online 🤼‍♂️</Text>
              </a>
              <a href="/CategorySection/Arcade">
                <Text fontSize="xl">🎮Arcade </Text>
              </a>
              <a href="/CategorySection/Estrategia">
                <Text fontSize="xl"> Estrategia 🌌</Text>
              </a>
              <a href="/CategorySection/BattleRoyale">
                <Text fontSize="xl"> Battle Royale 🪓</Text>
              </a>
              <a href="/CategorySection/Puzzle">
                <Text fontSize="xl">🧩 Puzzle </Text>
              </a>
              <a href="/CategorySection/AgilidadMental">
                <Text fontSize="xl">🧠 Agilidad Mental </Text>
              </a>
              <a href="/CategorySection/Carreras">
                <Text fontSize="xl"> Carreras 🚦</Text>
              </a>
              <a href="/CategorySection/Lucha">
                <Text fontSize="xl">👊 Lucha </Text>
              </a>

              <a href="/CategorySection/Shooter">
                <Text fontSize="xl"> Shooter 🎯</Text>
              </a>
              <a href="/CategorySection/Sigilo">
                <Text fontSize="xl">🐱‍👤 Sigilo </Text>
              </a>
              <a href="/CategorySection/Terror">
                <Text fontSize="xl"> Terror 👻</Text>
              </a>
              <a href="/CategorySection/MOBA">
                <Text fontSize="xl"> MOBA 💻</Text>
              </a>
              <a href="/CategorySection/MundoAbierto">
                <Text fontSize="xl">🌏 Mundo Abierto </Text>
              </a>
              <a href="/CategorySection/RPG">
                <Text fontSize="xl"> RPG 🤪</Text>
              </a>
              <a href="/CategorySection/FPS">
                <Text fontSize="xl">🌄 FPS </Text>
              </a>
              <a href="/CategorySection/Minijuegos">
                <Text fontSize="xl">🎱 Minijuegos 🎱</Text>
              </a>
              <a href="/CategorySection/MMORPG">
                <Text fontSize="xl">👩‍💻 MMORPG </Text>
              </a>
              <a href="/CategorySection/Simulacion">
                <Text fontSize="xl"> Simulacion 🛸</Text>
              </a>
              <a href="/CategorySection/Supervivencia">
                <Text fontSize="xl">🏃‍♀️ Supervivencia 🏃‍♀️</Text>
              </a>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HeaderCategorias;
