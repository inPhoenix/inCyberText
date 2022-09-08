// @ts-nocheck
import { Button, Text } from "@arwes/core"
import React, { useState } from "react"

interface IProps {
  codedText: string
}
const duration = { enter: 500, exit: 500 }
const Results = ({ codedText }: IProps) => {
  const [activate, setActivate] = useState<any>(false)
  return (
    <div className="room">
      <Text animator={{ duration }}>{codedText}</Text>
      <div className="buttonContainer">
        <Button
          animator={activate}
          onClick={() => {
            navigator.clipboard.writeText(codedText)
          }}
        >
          <div className="copyClipboard">
            <Text>Copy to Clipboard</Text>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Results
