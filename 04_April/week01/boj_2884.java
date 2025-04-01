import java.util.Scanner;

public class boj_2884 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int H = sc.nextInt();
        int M = sc.nextInt();

        if (M >= 45) {
            System.out.println(H + " " + (M - 45));
        } else {
            System.out.println((H + 23) % 24 + " " + (M + 15) % 60);
        }
    }
}
