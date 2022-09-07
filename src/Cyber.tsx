// @ts-nocheck

import React, { useEffect } from "react"

import {
  ArwesThemeProvider,
  Button,
  Card,
  StylesBaseline,
  Text,
} from "@arwes/core"
import { BleepsProvider } from "@arwes/sounds"
import { AnimatorGeneralProvider } from "@arwes/animation"
import Lunicode from "./utils/lunicode"
const ASSETS = `${process.env.PUBLIC_URL}/assets/`
const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif'
const IMAGE_URL = ASSETS + "cyberWall.png"
const SOUND_OBJECT_URL = ASSETS + "sounds/object.mp3"
const SOUND_ASSEMBLE_URL = ASSETS + "sounds/assemble.mp3"
const SOUND_TYPE_URL = ASSETS + "sounds/type.mp3"
const SOUND_CLICK_URL = ASSETS + "sounds/click.mp3"

const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } }
const audioSettings = { common: { volume: 0.25 } }
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
  type: { src: [SOUND_TYPE_URL], loop: true },
  click: { src: [SOUND_CLICK_URL] },
}
const bleepsSettings = {
  object: { player: "object" },
  assemble: { player: "assemble" },
  type: { player: "type" },
  click: { player: "click" },
}

const Cyber = () => {
  const [activate, setActivate] = React.useState(true)
  const [activate2, setActivate2] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [codedText, setCodedText] = React.useState("")
  const animatorGeneral = { duration: { enter: 200, exit: 200 } }
  const luni = new Lunicode()

  useEffect(() => {
    const timeout = setTimeout(() => setActivate(true), 1000)
    return () => clearTimeout(timeout)
  }, [activate])

  const handleChange = (e) => {
    cancelIdleCallback(e)
    setValue(e.target.value)
  }
  const handleOnClick = () => {
    const encodedText = luni.tools.creepify.encode(value)
    setCodedText(encodedText)
  }

  const duration = { enter: 500, exit: 500 }

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={globalStyles} />
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <Card
            animator={{ activate }}
            image={{
              src: IMAGE_URL,
              alt: "CyberPunk Picture",
            }}
            title="Cyber Punk Text"
            options={
              <Button palette="secondary" onClick={() => handleOnClick()}>
                <Text>Execute</Text>
              </Button>
            }
            landscape
            hover
            style={{ maxWidth: 900 }}
          >
            <div style={{ position: "relative" }}>
              <input
                // className={"form-control"}
                id="fname"
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder="Type here"
                type="text"
              />
            </div>
          </Card>
          {codedText && (
            <div className="room">
              <Text animator={{ duration,
              }}>{codedText}</Text>
              <div className="buttonContainer">
                <Button
                  animator={{ activate2 }}
                  onClick={() => {
                    navigator.clipboard.writeText(codedText)
                  }}
                >
                  <Text>Copy to Clipboard</Text>
                </Button>
              </div>
            </div>
          )}
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>
  )
}

export default Cyber
