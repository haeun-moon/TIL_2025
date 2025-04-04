import java.io.*;
import java.util.Scanner;
import java.util.StringTokenizer;

public class boj_2439 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer st;

        int N = Integer.parseInt(br.readLine());

        for (int i = 1; i <= N; i++) {
            bw.write(" ".repeat(N-i) + "*".repeat(i) + "\n");
        }
        bw.close();
    }
}
