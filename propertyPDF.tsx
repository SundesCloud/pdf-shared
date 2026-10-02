import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font, 
} from '@react-pdf/renderer';
import { PropertyData } from './interface';

interface BrochureProps {
  data: PropertyData;
}

// Obtener el origen dinámico si se renderiza en cliente, o usar ruta absoluta/relativa
const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

// Registro de fuentes desde public/fonts utilizando las fuentes variables
Font.register({
  family: 'Inter',
  fonts: [
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'normal',
    },
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'medium',
    },
    {
      src: `${baseUrl}/fonts/Inter-Variable.ttf`,
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: 'Lato',
  fonts: [
    {
      src: `${baseUrl}/fonts/Lato-Regular.ttf`,
      fontWeight: 'normal',
    },
    {
      src: `${baseUrl}/fonts/Lato-Bold.ttf`,
      fontWeight: 'bold',
    },
    {
      src: `${baseUrl}/fonts/Lato-Light.ttf`,
      fontWeight: 'light',
    },
  ],
});

const PRIMARY_COLOR = '#131516';
const SECONDARY_COLOR = '#0F4C75';
const TEXT_DARK = '#373D3F';
const TEXT_MUTED = '#6F7C80';
const BG_LIGHT = '#F0F0F0';
const BORDER_COLOR = '#DADEDF';

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 42,
    paddingHorizontal: 30,
    fontFamily: 'Lato',
    fontSize: 8.5,
    color: TEXT_DARK,
    backgroundColor: '#FFFFFF',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1.5,
    borderBottomColor: PRIMARY_COLOR,
    paddingBottom: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 8.5,
    fontFamily: 'Lato',
    color: TEXT_MUTED,
    marginTop: 2,
  },
  keyMetricsRow: {
    flexDirection: 'row',
    backgroundColor: BG_LIGHT,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginBottom: 12,
    justify: 'space-around',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  metricBox: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 6,
  },
  metricLabel: {
    fontSize: 7.5,
    fontFamily: 'Lato',
    color: TEXT_MUTED,
    textTransform: 'uppercase',
  },
  metricValue: {
    fontSize: 10,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginTop: 1,
  },
  heroImage: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    borderRadius: 4,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginTop: 10,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingBottom: 3,
    letterSpacing: 0.2,
  },
  paragraph: {
    fontFamily: 'Lato',
    fontSize: 9,
    lineHeight: 1.25,
    marginBottom: 10,
    textAlign: 'justify',
    color: TEXT_DARK,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: BG_LIGHT,
    borderRadius: 4,
    padding: 8,
    borderLeftWidth: 3,
    borderLeftColor: SECONDARY_COLOR,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  categoryTitle: {
    fontSize: 8.5,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: SECONDARY_COLOR,
    marginBottom: 4,
  },
  featureItem: {
    fontSize: 7.5,
    fontFamily: 'Lato',
    color: TEXT_DARK,
    marginBottom: 2,
    lineHeight: 1.35,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 8,
  },
  galleryImageHalf: {
    width: '48.5%',
    height: 120,
    objectFit: 'cover',
    borderRadius: 4,
  },
  mapImage: {
    width: '100%',
    height: 150,
    objectFit: 'cover',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    marginBottom: 8,
  },
  table: {
    width: '100%',
    marginTop: 6,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  tableRowAlternate: {
    backgroundColor: BG_LIGHT,
  },
  tableLabel: {
    width: '45%',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: TEXT_DARK,
  },
  tableValue: {
    width: '55%',
    fontFamily: 'Lato',
    color: TEXT_MUTED,
  },
  summaryTable: {
    width: '100%',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 14,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  summaryRowAlternate: {
    backgroundColor: BG_LIGHT,
  },
  summaryLabel: {
    fontFamily: 'Lato',
    fontSize: 8.5,
    color: TEXT_MUTED,
    textTransform: 'uppercase',
  },
  summaryValue: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 9.5,
    color: PRIMARY_COLOR,
  },
  bedroomGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  bedroomCard: {
    width: '48%',
    backgroundColor: BG_LIGHT,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    padding: 8,
    marginBottom: 8,
    minHeight: 56,
  },
  bedroomTitle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 9,
    color: PRIMARY_COLOR,
    marginBottom: 4,
  },
  bedroomText: {
    fontFamily: 'Lato',
    fontSize: 8.5,
    lineHeight: 1.35,
    color: TEXT_DARK,
  },
  infoBlock: {
    marginTop: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 4,
    padding: 8,
    backgroundColor: BG_LIGHT,
  },
  infoList: {
    marginTop: 4,
  },
  infoItem: {
    fontFamily: 'Lato',
    fontSize: 8.5,
    lineHeight: 1.35,
    color: TEXT_DARK,
    marginBottom: 3,
    textAlign: 'justify',
  },
  policyBlock: {
    marginTop: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 4,
    padding: 8,
    backgroundColor: BG_LIGHT,
  },
  policyItem: {
    fontFamily: 'Lato',
    fontSize: 8.2,
    lineHeight: 1.4,
    color: TEXT_DARK,
    marginBottom: 5,
    textAlign: 'justify',
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 36,
    right: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: TEXT_MUTED,
    fontSize: 7.5,
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    paddingTop: 6,
  },
});

export const PropertyBrochurePDF: React.FC<BrochureProps> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBar}>
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subtitle}>
              {[data.region, data.country].filter(Boolean).join(', ')}
            </Text>
          </View>
        </View>

        <View style={styles.keyMetricsRow}>
          {data.propertyType ? (
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>{data.translations.propertyTypeLabel}</Text>
              <Text style={styles.metricValue}>{data.propertyType}</Text>
            </View>
          ) : null}
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>{data.translations.sleepsLabel}</Text>
            <Text style={styles.metricValue}>{data.sleeps}</Text>
          </View>
          {data.bedroomsCount ? (
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>{data.translations.bedroomsLabel}</Text>
              <Text style={styles.metricValue}>{data.bedroomsCount}</Text>
            </View>
          ) : null}
          {data.bathroomsCount ? (
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>{data.translations.bathroomsLabel}</Text>
              <Text style={styles.metricValue}>{data.bathroomsCount}</Text>
            </View>
          ) : null}
          {data.priceInfo?.pricePerNight ? (
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>{data.translations.priceFromLabel}</Text>
              <Text style={styles.metricValue}>
                ${data.priceInfo.pricePerNight.toLocaleString()} {data.priceInfo.currency}
              </Text>
            </View>
          ) : null}
        </View>

        {data.heroImage ? (
          <Image style={styles.heroImage} src={data.heroImage} />
        ) : null}

        <Text style={styles.sectionTitle}>{data.translations.overviewTitle}</Text>
        <Text style={styles.paragraph}>{data.overview}</Text>

        {data.bedroomsDetails && data.bedroomsDetails.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{data.translations.bedroomsTitle || 'Bedrooms'}</Text>
            <View style={styles.bedroomGrid}>
              {data.bedroomsDetails.map((bedroom, index) => {
                const entries = Object.entries(bedroom).filter(([, count]) => Number(count) > 0)

                return (
                  <View key={index} style={styles.bedroomCard} wrap={false}>
                    <Text style={styles.bedroomTitle}>
                      {data.translations.roomLabel || 'Room'} {index + 1}
                    </Text>
                    {entries.map(([type, count]) => (
                      <Text key={`${index}-${type}`} style={styles.bedroomText}>
                        {count} {type}
                      </Text>
                    ))}
                  </View>
                )
              })}

              {data.serviceBedroom && Object.values(data.serviceBedroom).some((count) => Number(count) > 0) && (
                <View style={styles.bedroomCard} wrap={false}>
                  <Text style={styles.bedroomTitle}>{data.translations.serviceRoomLabel || 'Service room'}</Text>
                  {Object.entries(data.serviceBedroom)
                    .filter(([, count]) => Number(count) > 0)
                    .map(([type, count]) => (
                      <Text key={`service-${type}`} style={styles.bedroomText}>
                        {count} {type}
                      </Text>
                    ))}
                </View>
              )}

              {data.livingRoom && Object.values(data.livingRoom).some((count) => Number(count) > 0) && (
                <View style={styles.bedroomCard} wrap={false}>
                  <Text style={styles.bedroomTitle}>{data.translations.livingRoomLabel || 'Living room'}</Text>
                  {Object.entries(data.livingRoom)
                    .filter(([, count]) => Number(count) > 0)
                    .map(([type, count]) => (
                      <Text key={`living-${type}`} style={styles.bedroomText}>
                        {count} {type}
                      </Text>
                    ))}
                </View>
              )}
            </View>
          </View>
        )}

        {data.otherRules && data.otherRules.trim() ? (
          <View style={styles.infoBlock}>
            <Text style={styles.sectionTitle}>{data.translations.notesLabel || 'Notes'}</Text>
            <Text style={styles.infoItem}>{data.otherRules}</Text>
          </View>
        ) : null}

        {data.operativeDetails?.extraDetails && data.operativeDetails.extraDetails.trim() ? (
          <View style={styles.infoBlock}>
            <Text style={styles.sectionTitle}>{data.translations.extraDetailsLabel || 'Extra details'}</Text>
            <Text style={styles.infoItem}>{data.operativeDetails.extraDetails}</Text>
          </View>
        ) : null}

        {data.operativeDetails?.experiences && data.operativeDetails.experiences.trim() ? (
          <View style={styles.infoBlock}>
            <Text style={styles.sectionTitle}>{data.translations.experiencesLabel || 'Experiences'}</Text>
            <Text style={styles.infoItem}>{data.operativeDetails.experiences}</Text>
          </View>
        ) : null}

        {data.extraInformation &&
          ((data.extraInformation.lovedThings && data.extraInformation.lovedThings.length > 0) ||
            (data.extraInformation.knownThings && data.extraInformation.knownThings.length > 0)) && (
            <View style={styles.infoBlock}>
              {data.extraInformation.lovedThings && data.extraInformation.lovedThings.length > 0 ? (
                <View style={styles.infoList}>
                  <Text style={styles.sectionTitle}>{data.translations.whatWeLoveLabel || 'What we love'}</Text>
                  {data.extraInformation.lovedThings.map((item, index) => (
                    <Text key={`love-${index}`} style={styles.infoItem}>• {item}</Text>
                  ))}
                </View>
              ) : null}

              {data.extraInformation.knownThings && data.extraInformation.knownThings.length > 0 ? (
                <View style={styles.infoList}>
                  <Text style={styles.sectionTitle}>{data.translations.youShouldKnowLabel || 'What you should know'}</Text>
                  {data.extraInformation.knownThings.map((item, index) => (
                    <Text key={`know-${index}`} style={styles.infoItem}>• {item}</Text>
                  ))}
                </View>
              ) : null}
            </View>
          )}

        {data.categorizedFacilities.length > 0 && (
          <View wrap={true}>
            <Text style={styles.sectionTitle}>{data.translations.facilitiesTitle}</Text>
            <View style={styles.categoriesContainer}>
              {data.categorizedFacilities.map((cat, idx) => (
                /* wrap={false} evita que una tarjeta se corte a la mitad entre dos páginas */
                <View key={idx} style={styles.categoryCard} wrap={false}>
                  <Text style={styles.categoryTitle}>{cat.categoryLabel}</Text>
                  {cat.items.map((item, itemIdx) => (
                    <Text key={itemIdx} style={styles.featureItem}>
                      • {item}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.footer} fixed>
          <Text>{data.title}</Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${data.translations.pageLabel} ${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        {data.images && data.images.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>{data.translations.interiorTitle}</Text>
            <View style={styles.galleryGrid}>
              {data.images.slice(0, 4).map((imgUrl, index) => (
                <Image key={index} style={styles.galleryImageHalf} src={imgUrl} />
              ))}
            </View>
          </>
        )}

        {data.mapImage ? (
          <View>
            <Text style={styles.sectionTitle}>{data.translations.mapTitle || 'Location'}</Text>
            <Image style={styles.mapImage} src={data.mapImage} />
          </View>
        ) : null}

        <Text style={styles.sectionTitle}>{data.translations.termsTitle}</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableRowAlternate]}>
            <Text style={styles.tableLabel}>{data.translations.checkInLabel}</Text>
            <Text style={styles.tableValue}>{data.termsAndConditions.checkIn}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{data.translations.checkOutLabel}</Text>
            <Text style={styles.tableValue}>{data.termsAndConditions.checkOut}</Text>
          </View>
          <View style={[styles.tableRow, styles.tableRowAlternate]}>
            <Text style={styles.tableLabel}>{data.translations.smokingLabel}</Text>
            <Text style={styles.tableValue}>
              {data.termsAndConditions.smokingAllowed ? data.translations.allowed : data.translations.notAllowed}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{data.translations.suitableForEvents}</Text>
            <Text style={styles.tableValue}>
              {data.termsAndConditions.suitableForEvents ? data.translations.allowed : data.translations.notAllowed}
            </Text>
          </View>
          {data.termsAndConditions.petsAllowed !== undefined && (
            <View style={[styles.tableRow, styles.tableRowAlternate]}>
              <Text style={styles.tableLabel}>{data.translations.petsLabel}</Text>
              <Text style={styles.tableValue}>
                {data.termsAndConditions.petsAllowed ? data.translations.allowed : data.translations.notAllowed}
              </Text>
            </View>
          )}
          {data.termsAndConditions.childrenAllowed !== undefined && (
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>{data.translations.childrenLabel}</Text>
              <Text style={styles.tableValue}>
                {data.termsAndConditions.childrenAllowed ? data.translations.allowed : data.translations.notAllowed}
              </Text>
            </View>
          )}
          {data.termsAndConditions.securityDeposit !== undefined && (
            <View style={[styles.tableRow, styles.tableRowAlternate]}>
              <Text style={styles.tableLabel}>{data.translations.securityDepositLabel}</Text>
              <Text style={styles.tableValue}>
                {data.termsAndConditions.securityDeposit.toLocaleString()} {data.priceInfo?.currency || 'CLP'}
              </Text>
            </View>
          )}
          {data.termsAndConditions.cancellationPolicy && (
            <View style={styles.tableRow}>
              <Text style={styles.tableLabel}>{data.translations.cancellationPolicyLabel}</Text>
              <Text style={styles.tableValue}>{data.translations.cancellationPolicyTitle}</Text>
            </View>
          )}
        </View>

        {data.cancellationPolicyChile && data.cancellationPolicyChile.length > 0 && (
          <View style={styles.policyBlock}>
            <Text style={styles.sectionTitle}>{data.translations.cancellationPolicyTitle || 'Chile Policy'}</Text>
            {data.cancellationPolicyChile.map((item, index) => (
              <Text key={`policy-${index}`} style={styles.policyItem}>
                • {item}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};