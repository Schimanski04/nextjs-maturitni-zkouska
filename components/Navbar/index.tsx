"use client";

import Link from "next/link";

import {
  Box, Burger,
  Divider, Drawer, Group,
  Image, rem,
  ScrollArea
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import ColorSchemeToggle from "../ColorSchemeToggle";
// import NavbarSearch from "../NavbarSearch";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" className={classes.linkLogo}>
            <Image
              src="/vercel.svg"
              className={classes.imgLogo}
              
            />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" className={classes.link}>
              Úvod
            </Link>
            <Link href="/hw" className={classes.link}>
              Hardware
            </Link>
            <Link href="/sw" className={classes.link}>
              Software
            </Link>
            <Link href="/cjl" className={classes.link}>
              Čeština
            </Link>
          </Group>

          <Group visibleFrom="sm" gap="sm">
            {/* <NavbarSearch /> */}
            <ColorSchemeToggle />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link} onClick={closeDrawer}>
            Úvod
          </Link>
          <Link href="/hw" className={classes.link} onClick={closeDrawer}>
            Hardware
          </Link>
          <Link href="/sw" className={classes.link} onClick={closeDrawer}>
            Software
          </Link>
          <Link href="/cjl" className={classes.link} onClick={closeDrawer}>
            Čeština
          </Link>

          <Divider my="sm" />

          <Group justify="center" pb="xl" px="md">
            <ColorSchemeToggle />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Navbar;
