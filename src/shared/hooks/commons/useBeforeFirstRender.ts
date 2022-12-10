import { useEffect, useState } from 'react';

export function useBeforeFirstRender(f: () => void) {
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    if (!hasRendered) {
      setHasRendered(true);
      f();
    }
  }, [f, hasRendered]);
}
