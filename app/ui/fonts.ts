import { Quicksand, Marcellus, Lusitana } from 'next/font/google';

export const inter = Quicksand({
  weight: '600',
  subsets: ['latin'] }
);

export const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'] }
);

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
