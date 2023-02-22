import useModalDOM from "helpers/hooks/useModalDOM";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useScrrolltoTop from "helpers/hooks/useScrrolltoTop";

export default function Document({ children }) {
  useModalDOM();
  useScrollAnchor();
  useScrrolltoTop();
  return children;
}
