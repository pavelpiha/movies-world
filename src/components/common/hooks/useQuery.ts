import React from 'react';
import { useRouter } from 'next/router';
import { encode } from 'querystring';

export function useQuery(): any {
  const { query } = useRouter();
  return React.useMemo(() => new URLSearchParams(encode(query)), [query]);
}
