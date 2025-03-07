import java.util.Scanner;

public class swea_5215 {

	static int tc,N,L,max;
	static int [][] map;
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner (System.in);
		
		int T = sc.nextInt();
		
		for (tc = 1; tc <= T; tc++) {
			N = sc.nextInt();
			L = sc.nextInt();
		
			map = new int [N][2];
			
			for (int n = 0; n < N; n++) {
				map[n][0] = sc.nextInt();
				map[n][1] = sc.nextInt();
			}
			
			max = 0;
			comb(0,0,0);
			System.out.println("#" + tc + " " + max);
		}//tc
	}//main

	public static void comb (int idx, int sumT, int sumK) {
		
		if (sumK > L) {
			return;
		}
		
		if (idx == N) {
			max = Math.max(max, sumT);
			return;
		}
		
		comb(idx+1 , sumT + map[idx][0] , sumK + map[idx][1]);
		comb(idx+1, sumT, sumK);
	
	}//comb
}