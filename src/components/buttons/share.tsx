import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { QRCodeSVG } from "qrcode.react";
import { useConfig } from "config";
import VCard from "vcard-creator";
import { useMemo } from "react";

export function ShareButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack gap={10}>
              <Card>
                <CardHeader>Resume</CardHeader>
                <CardBody>
                  <QRCodeSVG value={url} />
                </CardBody>
              </Card>
              <Card>
                <CardHeader>vCard</CardHeader>
                <CardBody>
                  <QRCodeSVG value={vCardText} />
                </CardBody>
              </Card>
            </HStack>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
