import useModalDOM from "helpers/hooks/useModalDOM";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useScrrolltoTop from "helpers/hooks/useScrrolltoTop";

export default function Document({ children }) {
  useScrrolltoTop();
  useModalDOM();
  useScrollAnchor();
  return children;
}
