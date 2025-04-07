import java.util.Scanner;

public class swea_1952 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();

        for (int tc = 1; tc <= T; tc++) {

            int day = sc.nextInt();
            int month = sc.nextInt();
            int month3 = sc.nextInt();
            int year = sc.nextInt();

            int [] plan = new int [13];

            for (int i = 1; i <= 12; i++) {
                plan[i] = sc.nextInt();
            }

            int [] fee = new int [13];

            for (int i = 1; i <= 12; i++) {

                fee[i] = Math.min ((plan[i] * day) + fee[i-1], month + fee[i-1]);

                if (i >= 3) {
                    fee[i] = Math.min(fee[i], month3 + fee[i-3]);
                } else {
                    fee[i] = Math.min(fee[i], month3);
                }
            }

            fee[12] = Math.min(fee[12], year);

            System.out.println("#" + tc + " " + fee[12]);
        }//tc
    }
}
