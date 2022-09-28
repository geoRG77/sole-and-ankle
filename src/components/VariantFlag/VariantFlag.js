import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";

const VariantFlag = ({ variant }) => {
  if (variant === "on-sale") {
    return <SaleFlag>Sale</SaleFlag>;
  } else if (variant === "new-release") {
    return <NewReleaseFlag>Just released!</NewReleaseFlag>;
  } else if (variant === "default") {
    return null;
  } else throw new Error(`Variant was not specified: ${variant}`);
};

const Base = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  border-radius: 2px;
  padding: 6px 8px;
  color: ${COLORS.white};
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.medium};
`;

const SaleFlag = styled(Base)`
  background-color: ${COLORS.primary};
`;

const NewReleaseFlag = styled(Base)`
  background-color: ${COLORS.secondary};
`;

export default VariantFlag;
