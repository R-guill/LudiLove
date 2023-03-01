import Head from "next/head";
import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";

export default function meet() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          <CssVarsProvider>
            <div align="right">
              <div align="left">LudiLove</div>
              <Button color="danger" onClick={function () {}} variant="soft">
                Meet
              </Button>

              <Button color="danger" onClick={function () {}} variant="soft">
                Chat
              </Button>

              <Button color="danger" onClick={function () {}} variant="soft">
                Profile
              </Button>
            </div>
          </CssVarsProvider>
        </h1>

        <div align="center">
          <Avatar color="primary" variant="plain" />
        </div>
        <div align="center">Nom Prénom</div>
        <div align="center">Age</div>
        <div align="center">Ville</div>
        <div align="center">Jeu préféré</div>
        <div align="center">Description</div>
        <div align="right">
          <Button color="success" onClick={function () {}} variant="solid">
            Interested
          </Button>
          <Button color="danger" onClick={function () {}} variant="solid">
            Not Interested
          </Button>
        </div>
      </main>
    </>
  );
}