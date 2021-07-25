/* eslint-disable no-unused-vars */

import Camera from '@material-ui/icons/CameraAlt'
import Fab from '@material-ui/core/Fab'
import InputBase from '@material-ui/core/InputBase'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Paper from '@material-ui/core/Paper'
import React, { useState } from 'react'
import Save from '@material-ui/icons/Save'
import Zoom from '@material-ui/core/Zoom'
import { useAuth } from 'base-shell/lib/providers/Auth'
import { useIntl } from 'react-intl'
import { useQuestions } from 'material-ui-shell/lib/providers/Dialogs/Question'
import ImgageUploadDialog from 'material-ui-shell/lib/containers/ImageUploadDialog'
import 'typeface-poppins'

const UploadPragas = () => {
  const intl = useIntl()
  // const { openDialog } = useQuestions()

  const { auth, updateAuth } = useAuth()
  const {
    photoURL: currentPhoroURL = '',
    displayName: currentDisplayName = '',
    email = '',
  } = auth || {}
  const [displayName, setDisplayName] = useState(currentDisplayName)
  const [photoURL, setPhotoURL] = useState(currentPhoroURL)
  const [isImageDialogOpen, setImageDialogOpen] = useState(false)

  const hasChange =
    displayName !== currentDisplayName || photoURL !== currentPhoroURL

  const handleImageChange = (image) => {
    setPhotoURL(image)
  }

  const handleSave = async () => {
    updateAuth({ ...auth, displayName, photoURL })
  }

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'Controle de Pragas',
        defaultMessage: 'Controle de Pragas',
      })}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Paper
          elevation={3}
          style={{
            position: 'relative',
            borderRadius: 18,
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >


          <Fab
            onClick={() => setImageDialogOpen(true)}
            style={{
              position: 'absolute',
              zIndex: 99,
              top: 90,
            }}
            color="primary"
            aria-label="save"
            size="large"
          >
            <Camera />
          </Fab>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: 18,
              marginBottom: 18,
            }}
          >
            <InputBase
              value='Carregue sua imagem'
              onChange={(e) => setDisplayName(e.target.value)}
              inputProps={{
                style: {
                  fontFamily: 'Poppins',
                  fontSize: 23,
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              }}
            />
          </div>

          <Zoom in={hasChange}>
            <Fab
              onClick={handleSave}
              style={{ marginBottom: -20 }}
              color="primary"
              aria-label="save"
            >
              <Save />
            </Fab>
          </Zoom>
        </Paper>
        {
        <ImgageUploadDialog
            isOpen={isImageDialogOpen}
            style={{height: '50%', width: '30%', position:'relative' }}
            handleClose={() => setImageDialogOpen(false)}
            handleCropSubmit={handleImageChange}
        />
        }
      </div>
    </Page>
  )
}

export default UploadPragas
