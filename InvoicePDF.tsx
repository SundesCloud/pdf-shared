import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";
import { ReservationPDFProps } from "./interface";
import { BLACK, GREY_20, WHITE, GREY_100 } from "./style";

const SUNDES_LOGO_BASE64 =
  "data:image/png;base64,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";

const margin = 75;

/**
 * Componente puro de PDF para reservaciones
 * No contiene lógica, solo renderiza con los datos proporcionados
 */

type Props = {
  reservationData: ReservationPDFProps;
  owner: boolean;
};

export function ReservationPDF({ reservationData, owner }: Props) {
  const {
    reservation,
    destination,
    financialDetails,
    guestCosts,
    ownerCosts,
    guestsDetails,
    cancellationPolicies,
    translations,
  } = reservationData;

  const leseeFinalDetails = () => {
    return (
      <>
        <Text style={classes.sectionTitle}>{translations.payment}</Text>
        <View style={classes.tableColumn}>
          {financialDetails.status === "Second Half Payment Invoice" ? (
            <>
              <View style={[classes.row]}>
                <Text style={[classes.cell, classes.larger]}>
                  {translations.requested}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>
                    {financialDetails.amount}
                  </Text>
                </View>
              </View>
              <View style={classes.rowTight}>
                <Text style={classes.cellTight}>{translations.balanceDue}</Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlexTight}>
                    {financialDetails.halfCancellationDaysFormatted}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <>
              <View style={[classes.row]}>
                <Text style={[classes.cell, classes.larger]}>
                  {translations.paymentConfirm}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>
                    {financialDetails.amount}
                  </Text>
                </View>
              </View>
              <View style={classes.rowTight}>
                <Text style={classes.cellTight}>
                  {translations.firstPayment}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlexTight}>
                    {reservation.created}
                  </Text>
                </View>
              </View>
            </>
          )}
          {financialDetails.status === "First Half Payment Invoice" && (
            <>
              <View style={[classes.row, classes.line]}>
                <Text style={classes.cell}>{translations.balanceOwed}</Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>
                    {financialDetails.balanceOwed}
                  </Text>
                </View>
              </View>
              <View style={classes.rowTight}>
                <Text style={classes.cellTight}>{translations.balanceDue}</Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlexTight}>
                    {financialDetails.halfCancellationDaysFormatted}
                  </Text>
                </View>
              </View>
            </>
          )}
          <View style={[classes.row, classes.line]}>
            <Text style={[classes.cell, classes.black]}>Total:</Text>
            <View style={classes.right}>
              <Text style={classes.cellFlex}>{reservation.totalToPay}</Text>
            </View>
          </View>
        </View>
        <Text style={classes.detailsHead}>{translations.notes}</Text>
        <Text style={classes.details}>
          {translations.guestNotes.securityDepositInfo}
        </Text>
        <Text style={classes.details}>
          {translations.guestNotes.overCapacity1}
          {destination.guestNumber}
          {translations.guestNotes.overCapacity2}
        </Text>
        <Text style={classes.details}>
          {translations.guestNotes.overCapacity3}
        </Text>
        <Text style={classes.details}>{translations.guestNotes.parties}</Text>
        <Text style={classes.details}>{translations.guestNotes.pets}</Text>
        <Text style={classes.details}>{translations.guestNotes.fine}</Text>
        <Text style={classes.details}>
          {translations.guestNotes.qa}{" "}
          <Link src={"www.sundes.com/general-terms/0"}>
            <Text>{translations.terms}</Text>
          </Link>
        </Text>
      </>
    );
  };

  const ownerFinalDetails = () => {
    return (
      <>
        <Text style={classes.sectionTitle}>{translations.earnings}</Text>
        <View style={classes.tableColumn}>
          {/* <View style={classes.row}>
            <Text style={[classes.cell, classes.black]}>
              {translations.guestPays}:
            </Text>
            <View style={classes.right}>
              <Text style={classes.cellFlex}>{reservation.total}</Text>
            </View>
          </View>
          <View style={[classes.row, classes.line]}>
            <Text style={[classes.cell, classes.larger]}>
              {translations.serviceFee}
            </Text>
            <View style={classes.right}>
              <Text style={classes.cellFlex}>
                {financialDetails.serviceFee}
              </Text>
            </View>
          </View> */}
          <View style={classes.row}>
            <Text style={[classes.cell, classes.black]}>
              {translations.securityDeposit}:
            </Text>
            <View style={classes.right}>
              <Text style={classes.cellFlex}>
                {reservation.securityDeposit}
              </Text>
            </View>
          </View>
          {reservation.photographyDiscountValue !== undefined && (
            <View style={classes.row}>
              <Text style={[classes.cell, classes.black]}>
                {translations.photographyDiscount}:
              </Text>
              <View style={classes.right}>
                <Text style={classes.cellFlex}>
                  {reservation.photographyDiscountValue}
                </Text>
              </View>
            </View>
          )}
          <View style={[classes.row, classes.line]}>
            <Text style={[classes.cell, classes.black]}>
              {translations.youEarn}
            </Text>
            <View style={classes.right}>
              <Text style={classes.cellFlex}>{reservation.totalEarning}</Text>
            </View>
          </View>
          {reservation.changeType && (
            <>
              <View style={[classes.row, classes.line]}>
                <Text style={classes.cell}>{translations.changeType}</Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>
                    CLP {reservation.changeType}
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
        <Text style={classes.detailsHead}>{translations.notes}</Text>
        <Text style={classes.details}>
          {translations.ownerNotes.securityDepositInfo}
        </Text>
        <Text style={classes.details}>
          {translations.ownerNotes.basicServices}
        </Text>
        <Text style={classes.details}>{translations.ownerNotes.bankInfo}</Text>
        <Text style={classes.details}>{translations.ownerNotes.payPolicy}</Text>
        <Text style={classes.details}>
          {translations.ownerNotes.cancellationPolicy}
        </Text>
        <Text style={classes.details}>
          {translations.ownerNotes.roomDistribution}
        </Text>
      </>
    );
  };

  const costs = owner ? ownerCosts : guestCosts;

  return (
    <Document>
      <Page size="A4" style={classes.page}>
        <View style={classes.section}>
          <View style={classes.header}>
            <View>
              <Image style={classes.logo} src={SUNDES_LOGO_BASE64} />
            </View>
            <View style={classes.wrapper}>
              <Text style={classes.text}>
                {translations.dateCreated} {reservation.created}
              </Text>
              <Text style={classes.text}>
                {translations.status} {financialDetails.status}
              </Text>
              <Text style={classes.text}>
                {translations.invoice} {reservation.id}
              </Text>
            </View>
          </View>
          <Text style={classes.sectionTitle}>
            {translations.bookingSummary}
          </Text>

          <View style={classes.tableNoMargin}>
            <View style={classes.subTable}>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.guestName}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>{reservation.userName}</Text>
                </View>
              </View>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.propertyName}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>
                    {reservation.destinationName}
                  </Text>
                </View>
              </View>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.destination}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>{destination.city}</Text>
                </View>
              </View>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.country}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>{destination.country}</Text>
                </View>
              </View>
            </View>
            <View style={classes.subTable}>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.arrivalDate}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>{reservation.checkIn}</Text>
                </View>
              </View>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.departureDate}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>{reservation.checkOut}</Text>
                </View>
              </View>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.totalNights}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>{reservation.nights}</Text>
                </View>
              </View>
              <View style={classes.subTableRow}>
                <Text style={[classes.cell, classes.black]}>
                  {translations.cancellationPolicy}
                </Text>
                <View style={classes.right}>
                  <Link
                    src={"www.sundes.com/cancellation-policy"}
                    style={classes.cellFlex}
                  >
                    <Text>{translations.cancellationStandard}</Text>
                  </Link>
                </View>
              </View>
            </View>
          </View>
          <View style={classes.tableRow}>
            <Text style={[classes.tableCell, classes.black]}>
              {translations.guests}
            </Text>
            <View>
              <Text style={classes.cellFlex}>{guestsDetails}</Text>
            </View>
          </View>
          <Text style={classes.sectionTitle}>
            {translations.bookingDetails}
          </Text>
          <View style={classes.tableColumn}>
            <View style={classes.row}>
              <Text style={[classes.cell, classes.black]}>
                {translations.cost}
              </Text>
              <Text style={[classes.cell, classes.black, classes.center]}>
                {translations.detail}
              </Text>
              <View style={classes.right}>
                <Text
                  style={[classes.cellFlex, classes.black, classes.smallPad]}
                >
                  {translations.price}
                </Text>
              </View>
            </View>
            {costs.map((cost, index) => (
              <View key={index} style={[classes.row, classes.line]}>
                <Text style={classes.cell}>{cost.name}</Text>
                <Text style={[classes.cell, classes.center]}>
                  {cost.detail}
                </Text>
                <View style={classes.right}>
                  <Text style={classes.cellFlex}>{cost.total}</Text>
                </View>
              </View>
            ))}
          </View>
          {owner ? ownerFinalDetails() : leseeFinalDetails()}
          <>
            <Text style={classes.detailsHead}>Cancellation Policy | EN:</Text>
            <View style={classes.details}>
              <Text>{cancellationPolicies.english}</Text>
              <Text>{cancellationPolicies.englishNotes}</Text>
            </View>
            <Text style={classes.detailsHead}>
              Política de Cancelación | ES:
            </Text>
            <View style={classes.details}>
              <Text>{cancellationPolicies.spanish}</Text>
              <Text>{cancellationPolicies.spanishNotes}</Text>
            </View>
          </>
        </View>
      </Page>
    </Document>
  );
}

const classes = StyleSheet.create({
  page: {
    padding: 20,
    flexDirection: "column",
    backgroundColor: WHITE,
    color: BLACK,
    width: "100vw",
    fontFamily: "Helvetica",
    alignItems: "center",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottom: 0.5,
    borderBottomColor: GREY_20,
    alignItems: "flex-end",
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 35,
  },
  section: {
    paddingTop: 0,
    flexGrow: 1,
    width: `${margin}vw`,
    alignItems: "center",
  },
  sectionTitle: {
    width: `${margin}vw`,
    backgroundColor: GREY_20,
    fontSize: 11,
    padding: 5,
    paddingLeft: 10,
    marginBottom: 5,
  },
  table: {
    width: `${margin - 4}vw`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "row",
    marginBottom: 20,
  },
  tableNoMargin: {
    width: `${margin - 4}vw`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "row",
  },
  tableColumn: {
    width: `${margin - 4}vw`,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: 20,
  },
  subTable: {
    display: "flex",
    width: "35vw",
    flexDirection: "column",
    alignItems: "center",
  },
  subTableRow: {
    display: "flex",
    width: "35vw",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  tableRow: {
    display: "flex",
    width: `${margin - 4}vw`,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    minHeight: 30,
    marginBottom: 20,
  },
  row: {
    display: "flex",
    width: `${margin - 4}vw`,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    minHeight: 30,
  },
  rowTight: {
    display: "flex",
    width: `${margin - 4}vw`,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    minHeight: 15,
    marginBottom: 5,
  },
  cell: {
    margin: 3,
    padding: 3,
    fontSize: 9,
    width: 120,
  },
  tableCell: { margin: 3, padding: 3, fontSize: 9 },
  larger: {
    width: 160,
  },
  cellFlex: {
    margin: 3,
    padding: 3,
    fontSize: 9,
  },
  cellTight: {
    margin: "0 3",
    padding: "0 3",
    fontSize: 9,
    width: 120,
  },
  cellFlexTight: {
    margin: "0 3",
    padding: "0 3",
    fontSize: 9,
  },
  black: {
    fontWeight: 700,
    color: GREY_100,
  },
  right: {
    width: 90,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  details: {
    fontSize: 6,
    marginTop: 5,
    width: `${margin}vw`,
    textAlign: "justify",
  },
  detailsHead: {
    marginTop: 20,
    fontSize: 7,
    width: `${margin}vw`,
    textAlign: "justify",
  },
  text: {
    fontSize: 9,
    color: GREY_100,
  },
  title: {
    fontSize: 11,
    padding: 10,
  },
  center: {
    textAlign: "center",
    width: 140,
  },
  smallPad: {
    paddingRight: 8,
  },
  line: {
    borderTop: 0.5,
    borderTopColor: GREY_20,
  },
});
