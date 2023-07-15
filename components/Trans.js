import React from "react";
import { useIntl } from "react-intl";

const Trans = ({ id }) => {
  const intl = useIntl();
  return <>{intl.formatMessage({ id })}</>;
};

export default Trans;
