import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { QRCodeSVG } from "qrcode.react";
import { useConfig } from "config";
import VCard from "vcard-creator";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function ShareButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const { firstName, lastName, jobTitle, mobile, email, github, twitter } =
    useConfig();
  const vCardText = useMemo(() => {
    const vCard = new VCard()
      .addName(lastName, firstName)
      .addJobtitle(jobTitle)
      .addPhoneNumber(mobile)
      .addEmail(email);
    if (github) {
      vCard.addSocial(`https://github.com/${github}`, "GitHub", github);
    }
    if (twitter) {
      vCard.addSocial(`https://x.com/${twitter}`, "Twitter", twitter);
    }
    return vCard.buildVCard();
  }, [firstName, lastName, jobTitle, mobile, email, github, twitter]);

  const url = window.location.href;

  return (
    <>
      <IconButton
        aria-label="Share"
        icon={<ExternalLinkIcon />}
        variant="ghost"
        onClick={onOpen}
      />

      <Modal size="xs" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("share")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs align="center" variant="soft-rounded">
              <TabList>
                <Tab>Resume</Tab>
                <Tab>vCard</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <QRCodeSVG value={url} />
                </TabPanel>
                <TabPanel>
                  <QRCodeSVG value={vCardText} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
