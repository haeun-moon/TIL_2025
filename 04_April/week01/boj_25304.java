import java.util.Scanner;

public class boj_25304 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int X = sc.nextInt();

        int N = sc.nextInt();

        int sum = 0;

        for (int n = 0; n < N; n++) {
            sum += (sc.nextInt() * sc.nextInt());
        }

        if (sum == X) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

        //System.out.println(sum == X ? "Yes" : "No");

    }
}
