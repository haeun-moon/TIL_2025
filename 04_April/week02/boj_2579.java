import java.util.Scanner;

public class boj_2579 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        int [] arr = new int[301];

        for (int n = 1; n <= N; n++) {
            arr[n] = sc.nextInt();
        }

        int [] dp = new int[301];

        dp[1] = arr[1];
        dp[2] = arr[1] + arr[2];
        dp[3] = Math.max(arr[1] + arr[3], arr[2] + arr[3]);

        if (N >= 4) {
            for (int i = 4; i <= N; i++) {
                dp[i] = Math.max(dp[i-2] + arr[i], dp[i-3] + arr[i-1] + arr[i]);
            }
        }
        System.out.println(dp[N]);
    }
}
