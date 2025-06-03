import { LinkCard } from "./LinkCard";
import { useTranslations } from "next-intl";

const Social = () => {
  const t = useTranslations("Links");

  return (
    <ul className="flex flex-wrap gap-2 items-center mb-6">
      <LinkCard text={t("loyaltyProgram")} href={"loyalty"} />
      <LinkCard text={t("partners")} href={"/"} />
      <LinkCard text={t("returns")} href={"/"} />
      <LinkCard text={t("proxy")} href={"/"} />
      <LinkCard text={t("course")} href={"/"} fullWidth />
      <LinkCard text={t("creo")} href={"/"} fullWidth />
      <LinkCard text={t("promo")} href={"/"} />
      <LinkCard text={t("faq")} href={"/"} />
      <LinkCard text={t("optPrice")} href={"/"} fullWidth />
    </ul>
  );
};

export default Social;
