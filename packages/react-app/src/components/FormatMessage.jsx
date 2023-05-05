import React from "react";
import { FormattedMessage } from "react-intl";
import eng from "../lang/en.json";

export default function FormatMessage({ id }) {
  return <FormattedMessage id={id} defaultMessage={eng[id]} />;
}
