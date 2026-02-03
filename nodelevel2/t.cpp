#include<iostream>
#include<string>
using namespace std;
int main() {
    int n = 3;

    // string binary = "";

    // while (n > 0) {
    //     binary = char('0' + (n % 2)) + binary;
    //     n /= 2;
    // }
    // cout << binary << endl;

    string binary = "";
    if (n == 0) cout<< 1;
    if (n == 1) cout<< 2;
    bool isSame = 0;
    int track = 0;

    while (n > 0) {
        binary = char('0' + (n % 2)) + binary;
        n /= 2;
        track++;
        if (track > 2) {
            if (binary[track] != binary[--track]) {
                isSame = false;
            }
        }
    }
    int monobitCount = 0;
    if (isSame) {
        cout<< track+1;
    } else {
        cout<< track;
    }
    return 0;
}