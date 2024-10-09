export const getTransformedCountryOptions = (country = []) => {
  const allCountrys = country?.map(item => ({
    value: item?.id,
    label: item?.common_name,
  }));

  return allCountrys || [];
};
export const getTransformedTimeZoneOptions = (timeZone = []) => {
  const allCountrytimeZone = timeZone?.map(item => ({
    value: item?.id,
    label: item?.timezone,
  }));

  return allCountrytimeZone || [];
};
export const getAllServicesOptions = (services = []) => {
  const allServices = services?.map(item => ({
    value: item?.id,
    label: item?.name,
    price: item?.price,
  }));

  return allServices || [];
};
