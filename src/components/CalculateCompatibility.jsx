// src/components/CalculateCompatibility.jsx

export default function calculateCompatibility(userA, userB) {
  const aSelf = userA?.answers?.self || [];
  const aPartner = userA?.answers?.partner || [];
  const bSelf = userB?.answers?.self || [];
  const bPartner = userB?.answers?.partner || [];

  if (
    aSelf.length === 0 || aPartner.length === 0 ||
    bSelf.length === 0 || bPartner.length === 0
  ) {
    return { AisBType: 0, BisAType: 0 };
  }

  let AisBType = 0;
  let BisAType = 0;

  for (let i = 0; i < aSelf.length; i++) {
    const A_self = aSelf[i]?.value;
    const A_partner = aPartner[i]?.value;
    const B_self = bSelf[i]?.value;
    const B_partner = bPartner[i]?.value;

    if (
      A_self === undefined || A_partner === undefined ||
      B_self === undefined || B_partner === undefined
    ) continue;

    const diffAB = Math.abs(B_partner - A_self);
    const scoreAB = ((4 - diffAB) / 4) * 10;
    AisBType += scoreAB;

    const diffBA = Math.abs(A_partner - B_self);
    const scoreBA = ((4 - diffBA) / 4) * 10;
    BisAType += scoreBA;
  }

  return {
    AisBType: Math.round(AisBType),
    BisAType: Math.round(BisAType),
  };
}
